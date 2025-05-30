using System.ComponentModel;
using System.Globalization;
using System.Linq.Expressions;
using System.Linq.Dynamic.Core;
using System.Reflection;
using System.Text;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text.RegularExpressions;

namespace ChiengPlannerVue.Utils
{
    public static class IQueryableExtension
    {

        public static IQueryable<T> OrderByName<T>(this IQueryable<T> source, string propertyName, Boolean isDescending)
        {

            if (source == null) throw new ArgumentNullException("source");
            if (propertyName == null) throw new ArgumentNullException("propertyName");

            Type type = typeof(T);
            ParameterExpression arg = Expression.Parameter(type, "x");

            PropertyInfo pi = type.GetProperty(propertyName);
            Expression expr = Expression.Property(arg, pi);
            type = pi.PropertyType;

            Type delegateType = typeof(Func<,>).MakeGenericType(typeof(T), type);
            LambdaExpression lambda = Expression.Lambda(delegateType, expr, arg);

            String methodName = isDescending ? "OrderByDescending" : "OrderBy";
            object result = typeof(Queryable).GetMethods().Single(
                method => method.Name == methodName
                        && method.IsGenericMethodDefinition
                        && method.GetGenericArguments().Length == 2
                        && method.GetParameters().Length == 2)
                .MakeGenericMethod(typeof(T), type)
                .Invoke(null, new object[] { source, lambda });
            return (IQueryable<T>)result;
        }

        public static string GetValues<T>(this List<T> source, string? propertyName, string? whereClause = null, string separator = "; ") where T : class
        {
            var value = source.AsQueryable().Where($"{whereClause ?? propertyName} != null").Select(propertyName).ToDynamicList<string>().ListToString(separator).EmptyStringIfNull();
            return value;
        }
    }

    public static class CollectionExtension
    {
        public static bool IsNullOrEmpty<T>(this IEnumerable<T> enumerable)
        {
            if (enumerable == null)
            {
                return true;
            }
            /* If this is a list, use the Count property for efficiency. 
             * The Count property is O(1) while IEnumerable.Count() is O(N). */
            if (enumerable is ICollection<T> collection)
            {
                return collection.Count < 1;
            }
            return !enumerable.Any();
        }
    }

    public static class StringExtension
    {
        public static string FirstCharToUpper(this string input)
        {
            return input switch
            {
                null => throw new ArgumentNullException(nameof(input)),
                "" => throw new ArgumentException($"{nameof(input)} cannot be empty", nameof(input)),
                _ => input.First().ToString().ToUpper() + input[1..],
            };
        }

        public static string FirstCharToLower(this string s)
        {
            if (string.IsNullOrEmpty(s))
            {
                return string.Empty;
            }
            char[] a = s.ToCharArray();
            a[0] = char.ToLower(a[0]);

            return new string(a);
        }

        public static List<string> Tokenize(this string value, params char[] separator)
        {
            if (!String.IsNullOrWhiteSpace(value))
            {
                var values = new List<string>();
                var tokens = value.Split(separator);
                foreach (var token in tokens)
                {
                    if (!String.IsNullOrWhiteSpace(token))
                    {
                        values.Add(token.Trim());
                    }
                }
                return values;
            }
            return new List<string>();

        }

        public static List<string> Tokenize(this string value, string separator)
        {
            if (!String.IsNullOrWhiteSpace(value))
            {
                var values = new List<string>();
                var tokens = value.Split(new string[] { separator }, StringSplitOptions.None);
                foreach (var token in tokens)
                {
                    if (!String.IsNullOrWhiteSpace(token))
                    {
                        values.Add(token.Trim());
                    }
                }
                return values;
            }
            return new List<string>();

        }
        public static string Between(this string value, string a, string b)
        {
            int posA = value.IndexOf(a);
            int posB = value.LastIndexOf(b);
            if (posA == -1 || posB == -1) return string.Empty;
            int adjustedPosA = posA + a.Length;
            if (adjustedPosA >= posB) return string.Empty;
            return value[adjustedPosA..posB];
        }

        public static string Before(this string value, string a)
        {
            int posA = value.IndexOf(a);
            if (posA == -1)
            {
                return string.Empty;
            }
            return value.Substring(0, posA);
        }

        public static string After(this string value, string a)
        {
            int posA = value.LastIndexOf(a);
            if (posA == -1)
            {
                return string.Empty;
            }
            int adjustedPosA = posA + a.Length;
            if (adjustedPosA >= value.Length)
            {
                return string.Empty;
            }
            return value.Substring(adjustedPosA);
        }

        public static string ToLowerAndSeparatedByDash(this string value)
        {
            if (!string.IsNullOrEmpty(value))
            {
                value = value.ToLower().Replace(" ", StringLiteral.Dash);

            }
            return value;
        }

        public static string GetSubstringBeforeCharacter(this string text, string stopAt = "-")
        {
            if (!String.IsNullOrWhiteSpace(text))
            {
                int charLocation = text.IndexOf(stopAt, StringComparison.Ordinal);

                if (charLocation > 0)
                {
                    return text.Substring(0, charLocation);
                }
            }

            return String.Empty;
        }
        public static bool ContainsIgnoreCase(this string text, string val)
        {
            if (string.IsNullOrEmpty(text) || string.IsNullOrEmpty(val)) return false;
            return text.IndexOf(val, StringComparison.CurrentCultureIgnoreCase) != -1;
        }

        public static string AddSpaceBeforeCapital(this string text)
        {
            if (string.IsNullOrWhiteSpace(text))
                return "";
            StringBuilder newText = new StringBuilder(text.Length * 2);
            newText.Append(text[0]);
            for (int i = 1; i < text.Length; i++)
            {
                if (char.IsUpper(text[i]) && text[i - 1] != ' ')
                    newText.Append(' ');
                newText.Append(text[i]);
            }
            return newText.ToString();
        }

        public static bool IsAlphanumericSymbolPassword(this string text)
        {
            var charMatch = Regex.Match(text, @"[a-zA-z]").Success;
            var digitMatch = Regex.Match(text, @"[\d]").Success;
            var symbolMatch = Regex.Match(text, @"[!@#$%^&\*\?<>\(\){}_\-+=]").Success;

            return (charMatch && digitMatch && symbolMatch);
        } 
    }

    public static class EnumExtension
    {

        public static string GetDescVal<Enum>(Enum enumerationValue)
        {
            if (enumerationValue == null)
            {
                return string.Empty;
            }
            Type type = enumerationValue.GetType();
            if (!type.IsEnum)
            {
                throw new ArgumentException("EnumerationValue must be of Enum type", "enumerationValue");
            }

            MemberInfo[] memberInfo = type.GetMember(enumerationValue.ToString());
            if (memberInfo != null && memberInfo.Length > 0)
            {
                object[] attrs = memberInfo[0].GetCustomAttributes(typeof(DescriptionAttribute), false);

                if (attrs != null && attrs.Length > 0)
                {
                    //Pull out the description value
                    return ((DescriptionAttribute)attrs[0]).Description;
                }
            }
            //If we have no description attribute, just return the ToString of the enum
            return enumerationValue.ToString();

        }
        public static string GetDescription<Enum>(this Enum enumerationValue)
         where Enum : struct
        {
            Type type = enumerationValue.GetType();
            if (!type.IsEnum)
            {
                throw new ArgumentException("EnumerationValue must be of Enum type", "enumerationValue");
            }

            MemberInfo[] memberInfo = type.GetMember(enumerationValue.ToString());
            if (memberInfo != null && memberInfo.Length > 0)
            {
                object[] attrs = memberInfo[0].GetCustomAttributes(typeof(DescriptionAttribute), false);

                if (attrs != null && attrs.Length > 0)
                {
                    //Pull out the description value
                    return ((DescriptionAttribute)attrs[0]).Description;
                }
            }
            //If we have no description attribute, just return the ToString of the enum
            return enumerationValue.ToString();
        }
        public static T ToEnum<T>(this string value)
        {
            return (T)Enum.Parse(typeof(T), value, true);
        }

        public static IEnumerable<T> GetValues<T>()
        {
            return Enum.GetValues(typeof(T)).Cast<T>();
        }

        public static Dictionary<string, string> ToDictionary(this Enum @enum)
        {
            var type = @enum.GetType();
            return Enum.GetValues(type).Cast<string>().ToDictionary(e => e, e => Enum.GetName(type, e));
        }

        public static List<string> GetDescriptionValues<T>() where T : struct
        {
            var values = new List<string>();

            foreach (T t in Enum.GetValues(typeof(T)))
            {
                values.Add(t.GetDescription());
            }
            values.Sort();

            return values;
        }
        public static T GetEnum<T>(string description) where T : new()
        {
            var type = typeof(T);
            if (!type.IsEnum) throw new InvalidOperationException();
            foreach (var field in type.GetFields())
            {
                if (Attribute.GetCustomAttribute(field,
                    typeof(DescriptionAttribute)) is DescriptionAttribute attribute)
                {
                    if (attribute.Description == description)
                        return (T)field.GetValue(null);
                }
                else
                {
                    if (field.Name == description)
                        return (T)field.GetValue(null);
                }
            }

            return default;
        }
    }

    public static class DateTimeExtension
    {
        public static DateTime ToDateTime(double month, double day, double year)
        {
            if (month <= 0 && day <= 0 && year <= 0)
            {
                return DateTime.MinValue;
            }

            string formatedString = String.Format("{0}/{1}/{2}", month.ToString(), day.ToString(), year.ToString());
            return formatedString.ToDate();
        }


        public static DateTime ToDateTime(string month, string day, string year)
        {
            if (String.IsNullOrEmpty(day) && String.IsNullOrEmpty(month) && String.IsNullOrEmpty(year))
            {
                return DateTime.MinValue;
            }
            string formatedString = String.Format("{0}/{1}/{2}", month, day, year);
            return formatedString.ToDate();
        }


        public static DateTime ToDate(this String dateString)
        {
            DateTime fromDateValue = DateTime.MinValue;
            if (String.IsNullOrWhiteSpace(dateString))
            {
                return fromDateValue;
            }

            var formats = new[] { "MM/dd/yyyy", "M/d/yyyy" };

            if (DateTime.TryParseExact(dateString, formats, CultureInfo.InvariantCulture, DateTimeStyles.None, out fromDateValue))
            {
                return fromDateValue;
            }
            else
            {
                fromDateValue = DateTime.MaxValue;
            }

            return fromDateValue;
        }

        public static DateTime? TryParseToDate(this String dateString)
        {
            DateTime? fromDateValue = null;
            if (String.IsNullOrWhiteSpace(dateString))
            {
                return fromDateValue;
            }

            DateTime date = DateTime.Now;
            var formats = new[] { "MM/dd/yyyy", "M/d/yyyy" };

            if (DateTime.TryParseExact(dateString, formats, CultureInfo.InvariantCulture, DateTimeStyles.None, out date))
            {
                fromDateValue = date;
            }


            return fromDateValue;
        }

        public static DateTime? TryParseToYear(this String dateString)
        {
            DateTime? fromDateValue = null;
            if (String.IsNullOrWhiteSpace(dateString))
            {
                return fromDateValue;
            }

            DateTime date = DateTime.Now;
            var formats = new[] { "yyyy", "yyyy" };

            if (DateTime.TryParseExact(dateString, formats, CultureInfo.InvariantCulture, DateTimeStyles.None, out date))
            {
                fromDateValue = date;
            }


            return fromDateValue;
        }

        public static string ToDateTimeFormat(this DateTime? date)
        {
            if (date != null)
            {

                return ((DateTime)date).ToString("MM/dd/yyyy HH:mm:ss");
            }
            return string.Empty;
        }


        public static string ToValue(this DateTime date)
        {
            if (date != null && date != DateTime.MaxValue && date != DateTime.MinValue)
            {
                return date.ToString("MM/dd/yyyy");
            }
            return string.Empty;
        }

        public static string ToValue(this DateTime date, string format = "MM/dd/yyyy")
        {
            if (date != null && date != DateTime.MaxValue && date != DateTime.MinValue)
            {
                return date.ToString(format);
            }
            return string.Empty;
        }

        public static string ToValue(this DateTime? date, string format = "MM/dd/yyyy")
        {
            if (date != null && date != DateTime.MaxValue && date != DateTime.MinValue)
            {
                return date.Value.ToString(format);
            }
            return string.Empty;
        }

        public static string ToValue(this DateTime? date)
        {
            if (date != null)
            {

                return ((DateTime)date).ToString("MM/dd/yyyy");
            }
            return string.Empty;
        }

        public static string ToBoolString(this bool booValue)
        {
            if (booValue)
            {

                return StringLiteral.BooleanYes;
            }
            return StringLiteral.BooleanNo;
        }

        public static string ToYear(this DateTime? date)
        {
            if (date != null)
            {

                return ((DateTime)date).ToString("yyyy");
            }
            return string.Empty;
        }


        public static string ListToString(this List<string> values, string delimeter = ", ")
        {
            if (values != null && values.Count() > 0)
            {
                return string.Join(delimeter, values.Distinct());
            }
            return string.Empty;
        }
    }

    public static class BoolleanExtension
    {
        public static bool StringToBool(this string value)
        {
            if (!String.IsNullOrEmpty(value) && value.Equals(StringLiteral.BooleanYes, StringComparison.OrdinalIgnoreCase))
            {
                return true;
            }
            return false;
        }

        public static string BoolToString(this bool value)
        {
            if (value)
            {
                return StringLiteral.BooleanYes;
            }
            return StringLiteral.BooleanNo;
        }
    }

    public static class GenericExtension
    {
        public static string EmptyStringIfNull<T>(this T subject)
        {
            return (subject == null) ? StringLiteral.Dash : subject.ToString();
        }

        public static string NullableToString<T>(this T? t) where T : struct
        {
            if (t != null)
                return t.ToString();
            return string.Empty;
        }

        public static int? ToNullableInt(this string s)
        {
            if (int.TryParse(s, out int i)) return i;
            return null;
        }

        public static float? ToNullableFloat(this string s, NumberStyles style = NumberStyles.Currency)
        {
            if (float.TryParse(s, style, null, out float i)) return i;
            return null;
        }

        public static string ToString<T>(this T? t) where T : struct
        {
            if (t != null)
            {
                return t.ToString();

            }
            return string.Empty;
        }
    }

    public static class QueryableExtension
    {
        public static IQueryable<T> PrepareQuery<T>(this IQueryable<T> query, string searchBy, int take, int skip, string sortBy, string sortDir, out int filteredRecords, out int totalRecords) where T : new()
        {
            totalRecords = query.Count();
            if (!string.IsNullOrEmpty(searchBy))
            {
                query = query.Where(searchBy);
            }

            filteredRecords = query.Count();

            if (!string.IsNullOrEmpty(sortBy))
            {
                query = query.OrderBy($"{sortBy} {sortDir}");

            }

            // Take requested number of records
            if (take > 0 && skip > -1)
            {
                query = query
                            .Skip(skip)
                            .Take(take);
            }

            return query;
        }

        public static IQueryable<T> OrderByDynamic<T>(this IQueryable<T> source, string orderBy, string dir)
        {
            string command = (dir == "desc") ? "OrderByDescending" : "OrderBy";
            var type = typeof(T);

            var property = type.GetProperty(orderBy);
            var parameter = Expression.Parameter(type, "p");

            if (property == null)
            {
                return source;
            }
            var propertyAccess = Expression.MakeMemberAccess(parameter, property);
            var orderByExpression = Expression.Lambda(propertyAccess, parameter);

            var resultExpression = Expression.Call(typeof(Queryable), command, new Type[] { type, property.PropertyType },
                                          source.Expression, Expression.Quote(orderByExpression));
            return source.Provider.CreateQuery<T>(resultExpression);
        }
    }

    public static class CriteriaExtension
    {
        public static string BuildCriteria(this string value, string criteria, bool containExpression = false)
        {
            if (!string.IsNullOrEmpty(value))
            {
                return string.Format(criteria, $".Trim().ToLower().Equals(\"{value}\")");

            }

            return string.Empty;
        }

        public static string BuildCriteria(this int value, string criteria)
        {
            if (value > 0)
            {
                return string.Format(criteria, $" = {value}");
            }

            return string.Empty;
        }
        public static string BuildCriteria(this long value, string criteria)
        {
            if (value > 0)
            {
                return string.Format(criteria, $" = {value}");
            }

            return string.Empty;
        }

        public static string BuildCriteria(this bool value, string criteria)
        {
            return string.Format(criteria, $" = {value}");
        }
    }

    public static class ExceptionMessageExtension
    {
        public static string NullObjectMessage(this string objectName)
        {
            return $"{objectName} must not be null";
        }

        public static string NullArgumentMessage(this string argumentName, string objectName)
        {
            return $"{objectName}'s proptery '{argumentName}' must not be null";
        }


    }

    public static class HashedStringExtension
    {
        public static string HashedValue(this string text)
        {
            // SHA512 is disposable by inheritance.  
            using (var sha256 = SHA256.Create())
            {
                // Send a sample text to hash.  
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(text));
                // Get the hashed string.  
                return BitConverter.ToString(hashedBytes).Replace("-", string.Empty).ToLower();
            }
        }

        public static string AddSpaceBeforeCapital(this string text)
        {
            if (string.IsNullOrWhiteSpace(text))
                return "";
            StringBuilder newText = new StringBuilder(text.Length * 2);
            newText.Append(text[0]);
            for (int i = 1; i < text.Length; i++)
            {
                if (char.IsUpper(text[i]) && text[i - 1] != ' ')
                    newText.Append(' ');
                newText.Append(text[i]);
            }
            return newText.ToString();
        }
    }
}
