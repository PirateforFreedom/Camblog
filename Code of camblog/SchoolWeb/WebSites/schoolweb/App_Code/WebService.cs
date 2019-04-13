using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using MySql.Data.MySqlClient;
using System.Data;
/// <summary>
/// WebService 的摘要说明
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// 若要允许使用 ASP.NET AJAX 从脚本中调用此 Web 服务，请取消注释以下行。 
 [System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService
{
    mysqlconnect mysl;
    public WebService()
    {
        mysl = new mysqlconnect();
     
        //如果使用设计的组件，请取消注释以下行 
        //InitializeComponent(); 
    }

    [WebMethod]
    public string HelloWorld()
    {
        return "Hello World";
    }
    [WebMethod]
    
    public string VerifyUser(string username,string password)
    {
        DataTable dtb = mysl.ExecuteDataTable("select * from r_user_information_t where user_name='"+username+"' and user_password='"+password+"'");
        if (dtb.Rows.Count == 1)
        {
            return "yes"; 
        }
       else
       {
            return "no";

        }
       
    }
    [WebMethod]
    public string InsertTxt(string strtxt,string usernamef,string userposttime)
    {

        int numposts = 0;
        string strquary = "select user_posts_num from r_person_postsffsum_t where user_name='" + usernamef + "'";
      DataTable dtb = mysl.ExecuteDataTable(strquary);
        if (dtb.Rows.Count == 1)
            {
            int st = int.Parse(dtb.Rows[0][0].ToString());
            st++;
            numposts = st;
            string vb= "UPDATE r_person_postsffsum_t SET user_posts_num ="+ numposts+" WHERE user_name = '" + usernamef + "'";
            int ty3 = mysl.ExecuteNonQuery(vb);

        }
        else
        {
            numposts++;
            string squd = "insert into r_person_postsffsum_t(user_name,user_posts_num)" +
"values('" + usernamef + "', " + numposts + ")";

            int ty1= mysl.ExecuteNonQuery(squd);
           
        }
        string stbb = "select user_name_tiaoshu from r_person_postsffsum_t where user_name = '"+ usernamef+"'";
        DataTable dtb1 = mysl.ExecuteDataTable(stbb);
        int reatiaoshu =Convert.ToInt32(dtb1.Rows[0][0].ToString());
        reatiaoshu++;
        string vb1 = "update r_person_postsffsum_t set user_name_tiaoshu=" + reatiaoshu + " where user_name='" + usernamef + "'";
        int ty3b = mysl.ExecuteNonQuery(vb1);

        string strsql = "insert into r_person_posts_t(user_name,user_post_content,user_post_date)" +
"values('"+ usernamef + "', '"+strtxt+ "', NOW())";

        int ty =mysl.ExecuteNonQuery(strsql);
        if (ty== 1)
        {
            string string1 = "yes";

            return string1;
        }
        else
        {
            string string1 = "no";

            return string1;
            //return "no";
    }
    }
    [WebMethod]
    public DataSet GetDataSetforpersonpostforuser(string username1)
    {
        string strquary = "SELECT user_post_content,user_post_date FROM r_person_posts_t where user_name='"+ username1+"'";
        DataTable dtb = mysl.ExecuteDataTable(strquary);
        var ds = new DataSet();
        var dt = new DataTable();
        dt.Columns.Add("user_post_content");
        dt.Columns.Add("user_post_date");
        int nump = dtb.Rows.Count;
        for (int i = 0; i < nump; i++)
        {
            dt.Rows.Add(dtb.Rows[i][0].ToString(), dtb.Rows[i][1].ToString());
        }
        ds.Tables.Add(dt);
       
        return ds;
    }
    [WebMethod]
    public DataSet  GetDataSetforpersonpost(string username1)
    {
        string strquary = "select t.*,p.user_pictrue from (select user_post_content,user_post_date ,user_name from r_person_posts_t  order by user_post_date asc) as t,r_user_information_t as p "+
" where t.user_name = p.user_name";
        DataTable dtb = mysl.ExecuteDataTable(strquary);
        var ds = new DataSet();
        var dt = new DataTable();
        dt.Columns.Add("user_post_content");
        dt.Columns.Add("user_post_date");
        dt.Columns.Add("user_name");
        dt.Columns.Add("user_pictrue");
        int nump = dtb.Rows.Count;
        for (int i = 0; i < nump; i++)
        {
            dt.Rows.Add(dtb.Rows[i][0].ToString(), dtb.Rows[i][1].ToString(), dtb.Rows[i][2].ToString(), dtb.Rows[i][3].ToString());
        }
        ds.Tables.Add(dt);
        string vb = "update r_person_postsffsum_t set user_name_tiaoshu="+ nump+" where user_name='"+ username1+"'";
        int ty3 = mysl.ExecuteNonQuery(vb);
        return ds;
    }
    [WebMethod]

    public DataSet GetUserInformation(string username)
    {
        //string  rygh = "select * from r_user_information_t where user_name='" + username + "' and user_password='" + password + "'";
        // return rygh;
        string strquary = "SELECT t.user_pictrue,p.user_posts_num,t.statement,t.date_time,t.country,p.user_name_tiaoshu,p.user_following_num,p.user_follower_num FROM r_user_information_t as t,r_person_postsffsum_t as p where t.user_name = p.user_name and t.user_name = '" + username+"'";
        DataTable dtb = mysl.ExecuteDataTable(strquary);
        var ds = new DataSet();
        var dt = new DataTable();
        dt.Columns.Add("user_pictrue");
        dt.Columns.Add("user_posts_num");
        dt.Columns.Add("statement");
        dt.Columns.Add("date_time");
        dt.Columns.Add("country");
        dt.Columns.Add("user_name_tiaoshu");
        dt.Columns.Add("user_following_num");
        dt.Columns.Add("user_follower_num");
        for (int i = 0; i < dtb.Rows.Count; i++)
        {
            dt.Rows.Add(dtb.Rows[i][0].ToString(), dtb.Rows[i][1].ToString(), dtb.Rows[i][2].ToString(), dtb.Rows[i][3].ToString(), dtb.Rows[i][4].ToString(), dtb.Rows[i][5].ToString(),dtb.Rows[i][6].ToString(), dtb.Rows[i][7].ToString());
        }
        ds.Tables.Add(dt);
        return ds;

    }
    [WebMethod]

    public string Updatefollowingforuser(string folloingusername,string onerbyuser)
    {
        //string  rygh = "select * from r_user_information_t where user_name='" + username + "' and user_password='" + password + "'";
        // return rygh;
        string strquary = "SELECT t.user_pictrue,p.user_posts_num,t.statement,t.date_time,t.country,p.user_name_tiaoshu FROM r_user_information_t as t,r_person_postsffsum_t as p where t.user_name = p.user_name and t.user_name = '" + folloingusername + "'";
        DataTable dtb = mysl.ExecuteDataTable(strquary);
        string insertfolling = "update r_person_following_t set user_following_pictrue='" + dtb.Rows[0][0].ToString() + "', user_following_name='" + folloingusername + "',user_following_conntry='" + dtb.Rows[0][4].ToString() + "',user_following_statement='" + dtb.Rows[0][2].ToString() + "',user_following_date='" + dtb.Rows[0][3].ToString() + "'" +
        " where user_name = '"+ onerbyuser+"'";
        int ty3 = mysl.ExecuteNonQuery(insertfolling);
        string updatefolling = "update r_person_postsffsum_t set user_following_num = 1 where user_name = '"+ onerbyuser+"'";
        int ty31 = mysl.ExecuteNonQuery(updatefolling);
        string strquary1 = "SELECT t.user_pictrue,p.user_posts_num,t.statement,t.date_time,t.country,p.user_name_tiaoshu FROM r_user_information_t as t,r_person_postsffsum_t as p where t.user_name = p.user_name and t.user_name = '" + onerbyuser + "'";
        DataTable dtb1 = mysl.ExecuteDataTable(strquary1);
        string insertfolling1 = "update r_person_follower_t set user_follower_pictrue='" + dtb1.Rows[0][0].ToString() + "', user_follower_name='" + onerbyuser + "',user_follower_conntry='" + dtb1.Rows[0][4].ToString() + "',user_follower_statement='" + dtb1.Rows[0][2].ToString() + "',user_follower_date='" + dtb1.Rows[0][3].ToString() + "'" +
        " where user_name = '"+ folloingusername+"'";
        int ty32= mysl.ExecuteNonQuery(insertfolling1);
        string updatefolling2 = "update r_person_postsffsum_t set user_follower_num = 1 where user_name = '"+ folloingusername+"'";
        int ty312 = mysl.ExecuteNonQuery(updatefolling2);
        return "yes";

    }
    [WebMethod]

    public DataSet Getfollowingforuser(string folloingusername)
    {
        string strquary = "select user_follower_name,user_follower_pictrue,user_follower_conntry,user_follower_statement,user_follower_date from r_person_follower_t where user_name='"+ folloingusername+"'";
       DataTable dtb = mysl.ExecuteDataTable(strquary);
        var ds = new DataSet();
        var dt = new DataTable();
        dt.Columns.Add("user_follower_name");
         dt.Columns.Add("user_follower_pictrue");
        dt.Columns.Add("user_follower_conntry");
         dt.Columns.Add("user_follower_statement");
         dt.Columns.Add("user_follower_date");
        for (int i = 0; i < dtb.Rows.Count; i++)
         {
             dt.Rows.Add(dtb.Rows[i][0].ToString(), dtb.Rows[i][1].ToString(), dtb.Rows[i][2].ToString(), dtb.Rows[i][3].ToString(), dtb.Rows[i][4].ToString());
         }
       // dt.Rows.Add("asdf");
 
         ds.Tables.Add(dt);
        return ds;

    }
    [WebMethod]

    public DataSet Getfollowing_ing_foruser(string folloingusername)
    {
        string strquary = "select user_following_name,user_following_pictrue,user_following_conntry,user_following_statement,user_following_date from r_person_following_t where user_name='" + folloingusername + "'";
        DataTable dtb = mysl.ExecuteDataTable(strquary);
        var ds = new DataSet();
        var dt = new DataTable();
        dt.Columns.Add("user_following_name");
        dt.Columns.Add("user_following_pictrue");
        dt.Columns.Add("user_following_conntry");
        dt.Columns.Add("user_following_statement");
        dt.Columns.Add("user_following_date");
        for (int i = 0; i < dtb.Rows.Count; i++)
        {
            dt.Rows.Add(dtb.Rows[i][0].ToString(), dtb.Rows[i][1].ToString(), dtb.Rows[i][2].ToString(), dtb.Rows[i][3].ToString(), dtb.Rows[i][4].ToString());
        }
        // dt.Rows.Add("asdf");

        ds.Tables.Add(dt);
        return ds;

    }
}
