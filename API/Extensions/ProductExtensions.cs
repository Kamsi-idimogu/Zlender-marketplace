using System;
using System.Collections.Generic;
using System.Linq;
using API.Entities;

namespace API.Extensions
{
    /*
        Extension methods provide extra functionality to already existing classes and objects by 
        allowing you to create custom methods that can be used on the objects
    */
    public static class ProductExtensions
    {
        public static IQueryable<Product> Sort(this IQueryable<Product> query, string orderBy)
        {
            if(string.IsNullOrWhiteSpace(orderBy)) return query.OrderBy(p => p.Name);

            query = orderBy switch
            {
                "price" => query.OrderBy(p => p.Price),
                "priceDesc" => query.OrderByDescending(p => p.Price),
                _ => query.OrderBy(p => p.Name) //default case
            };

            return query;
        }

        public static IQueryable<Product> Search(this IQueryable<Product> query, string searchTerm)
        {
            if(string.IsNullOrWhiteSpace(searchTerm)) return query;

            var lowerCaseSearchTerm = searchTerm.Trim().ToLower();

            return query.Where(p => p.Name.ToLower().Contains(lowerCaseSearchTerm));
        }

        public static IQueryable<Product> Filter(this IQueryable<Product> query, string brands, string types)
        {
            var brandList = new List<String>();
            var typeList = new List<String>();

            if(!string.IsNullOrEmpty(brands)) brandList.AddRange(brands.ToLower().Split(',').ToList());

            if(!string.IsNullOrEmpty(types)) typeList.AddRange(types.ToLower().Split(',').ToList());

            query = query.Where(p => brandList.Count == 0 || brandList.Contains(p.Brand.ToLower()));

            query = query.Where(p => typeList.Count == 0 || typeList.Contains(p.Type.ToLower()));

            return query;
        }
    }
}