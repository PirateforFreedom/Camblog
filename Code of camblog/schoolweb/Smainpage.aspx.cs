using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;
using System.Data;
public partial class Smainpage : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        mysqlconnect mysl = new mysqlconnect();
        DataTable dtb=mysl.ExecuteDataTable("select * from r_user_t");
        //Response.Write(dtb.Rows[0][1]);

    }


    protected void denglub_Click(object sender, EventArgs e)
    {
        Response.Redirect("ptoproom.aspx");
    }

    protected void usertxt_TextChanged(object sender, EventArgs e)
    {
       
    }
}