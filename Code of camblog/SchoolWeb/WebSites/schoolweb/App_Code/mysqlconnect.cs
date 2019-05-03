using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;
using System.Data;
/// <summary>
/// mysqlconnect 的摘要说明
/// </summary>
public class mysqlconnect
{
    
public string constr = "server=localhost;User Id=root;password=JQl864791;Database=camblog_database";
public DataTable ExecuteDataTable(string SQLString)
{
    using (MySqlConnection connection = new MySqlConnection(constr))
    {
        DataSet ds = new DataSet();
        try
        {
            connection.Open();
            MySqlDataAdapter command = new MySqlDataAdapter(SQLString, connection);
            command.Fill(ds, "ds");
        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw new Exception(ex.Message);
        }
        return ds.Tables[0];
    }
}
   
    public  int ExecuteNonQuery(string SQLString)
         {
             using (MySqlConnection connection = new MySqlConnection(constr))
             {
                using (MySqlCommand cmd = new MySqlCommand(SQLString, connection))
                {
                     try
                     {
                          connection.Open();
                          int rows = cmd.ExecuteNonQuery();
                         return rows;
                     }
                     catch (MySql.Data.MySqlClient.MySqlException e)
                     {
                          connection.Close();
                          throw e;
                     }
                 }
             }
    }
}
   
    

