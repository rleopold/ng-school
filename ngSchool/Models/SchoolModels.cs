using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ngSchool.Models
{
    public class Teacher
    {
        public int Id {get;set;}
        public string Honorific { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Suffix { get; set; }
        public string Email { get; set; }
        
        
    }

    public class Student
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
    }

    public class Class
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public virtual Teacher Teacher { get; set; }
        public int TeacherId { get; set; }
    }

    public class StudentClass
    {
        public int StudentId { get; set; }
        public int ClassId { get; set; }
    }

    public class SchoolContext : DbContext
    {
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Class> Classes { get; set; }
        public DbSet<StudentClass> StudentsInClasses { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StudentClass>()
                .HasKey(key=> new {key.StudentId, key.ClassId});
                
        }
    }

}