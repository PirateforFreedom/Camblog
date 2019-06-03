using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using MySql.Data.MySqlClient;
using System.Data;
using System.IO;
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

    public string VerifyUser(string username, string password)
    {
        DataTable dtb = mysl.ExecuteDataTable("select * from r_user_information_t where user_name='" + username + "' and user_password='" + password + "'");
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
    public string InsertCommentTxt(string strtxt, string usernamef, string userposttime, string pic)
    {

        string squd = "insert into r_person_posts_comment_t(user_posts_personnum,user_reply_content,user_replyer,user_follower_pictrue,user_comment_date)" +
"values('" + userposttime + "', '" + strtxt + "','" + usernamef + "','" + pic + "',NOW())";

        int ty1 = mysl.ExecuteNonQuery(squd);
        int numposts = 0;
        string strquary = "select user_post_coment_sum from r_person_posts_t where user_post_personsd='" + userposttime + "'";
        DataTable dtb = mysl.ExecuteDataTable(strquary);
        int st = int.Parse(dtb.Rows[0][0].ToString());
        st++;
        numposts = st;
        string vb = "update r_person_posts_t set user_post_coment_sum='" + numposts + "' where user_post_personsd='" + userposttime + "'";
        int ty3 = mysl.ExecuteNonQuery(vb);
        return "yes";

    }
    [WebMethod]
    public string InsertCommentlikes(string userposttime)
    {


        int numposts = 0;
        string strquary = "select user_post_like_num from r_person_posts_t where user_post_personsd='" + userposttime + "'";
        DataTable dtb = mysl.ExecuteDataTable(strquary);
        int st = int.Parse(dtb.Rows[0][0].ToString());
        st++;
        numposts = st;
        string vb = "update r_person_posts_t set user_post_like_num=" + numposts + " where user_post_personsd='" + userposttime + "'";
        int ty3 = mysl.ExecuteNonQuery(vb);
        return "yes";

    }
    /*
     * 给定用户名 取出用户信息
     */
    [WebMethod]
    public  DataSet SearchforInformation(string name)
    {
        string str = "select user_pictrue,statement,major_in,country,school_name,email,birth,enroll from r_user_information_t where user_name='"+name+"'";
        DataTable dbt = mysl.ExecuteDataTable(str);      
        DataTable table = new DataTable("table");
        DataSet dataset = new DataSet();
        table.Columns.Add("user_pictrue");
        table.Columns.Add("statement");
        table.Columns.Add("major_in");
        table.Columns.Add("country");
        table.Columns.Add("school_name");
        table.Columns.Add("email");
        table.Columns.Add("birth");
        table.Columns.Add("enroll");
        var UserPhoto = "";
        string path = dbt.Rows[0][0].ToString().Replace('/','\\');
        //string path = dbt.Rows[0][0].ToString();
        var strUploadPath = HttpContext.Current.Server.MapPath("") + path;
        System.Drawing.Bitmap bmp1 = new System.Drawing.Bitmap(strUploadPath);
        using (MemoryStream ms1 = new MemoryStream())
        {
            bmp1.Save(ms1, System.Drawing.Imaging.ImageFormat.Jpeg);
            byte[] arr1 = new byte[ms1.Length];
            ms1.Position = 0;
            ms1.Read(arr1, 0, (int)ms1.Length);
            ms1.Close();
            UserPhoto = Convert.ToBase64String(arr1);
        }


        ////F:\School\Camblog\Code of camblog\SchoolWeb\WebSites\schoolweb / picture / bn.jpg
        ////路径问题



        UserPhoto = "data:image/jpeg;base64," + UserPhoto;
            table.Rows.Add(path, dbt.Rows[0][1].ToString(), dbt.Rows[0][2].ToString(), dbt.Rows[0][3].ToString(), dbt.Rows[0][4].ToString(), dbt.Rows[0][5].ToString(), dbt.Rows[0][6].ToString(), dbt.Rows[0][7].ToString());
        dataset.Tables.Add(table);
        return dataset;
    }
    [WebMethod]
 /*
     * 验证名字是否被注册
     */
    public string VerifyNickname(string nickname)
    {
        DataTable dtb = mysl.ExecuteDataTable("select * from r_user_information_t where user_name='" + nickname +  "'");
        if (dtb.Rows.Count == 1)
        {
            return "yes";
        }
        else
        {
            return "no";

        }
    }
    /*
     * 保存用户头像
     */
    [WebMethod]
    public DataSet SaveImage(string image ,string name)
    {
        string username = name;
        var arr = image.Split(',');
        byte[] bytes = Convert.FromBase64String(arr[1]);
        var strUploadPath = HttpContext.Current.Server.MapPath("") + "\\picture";
        Console.Write(strUploadPath);
        if(!Directory.Exists(strUploadPath))
        {
            Directory.CreateDirectory(strUploadPath);
        }
        string strImagePath = strUploadPath + '\\' + username + ".jpeg";
       DataSet dataset = new DataSet();
       DataTable table = new DataTable("table");
        Console.Write(strImagePath);
        using(FileStream objfilestream = new FileStream(strImagePath, FileMode.Create, FileAccess.ReadWrite))
        {
            objfilestream.Write(bytes, 0, bytes.Length);
        }
        table.Columns.Add("result");
        table.Rows.Add("yes");
        dataset.Tables.Add(table);
        return dataset;
        
    }

    [WebMethod]
    
   // 更改用户信息   
   
    public string AlterInformation(string nickname,string specialty,string school,string email,string country,string oldname)
    {
        string vb = "UPDATE r_user_information_t SET user_name ='" + nickname + "', major_in = '"+specialty+ "', school_name = '" +
            school+"', email='"+email+"',country='"+country+"' WHERE user_name = '" + oldname + "'";
        int ty3 = mysl.ExecuteNonQuery(vb);
        if (ty3 == 1)
        {
            return "yes";
        }else
        {
            return "no";
        }
        
    }
    [WebMethod]
    /*
     *将新建用户信息插入数据表
     * 
     */
    public string InsertPersonInformation(string nickname, string user_picture,string pass, string realname, string specialty, string school, string email, string birth, string enroll, string sex,string country)
    {

        int nowyear = int.Parse(DateTime.Now.Year.ToString());
        DateTime dt = DateTime.Parse(birth);
        int birthyear = int.Parse(dt.Year.ToString());
        string ageing = (nowyear - birthyear + 1).ToString();
        string sex_id = "0";
        if(sex.CompareTo("male") == 0)
        {
            sex_id ="0";
        }else
        {
            sex_id = "1";
        }
        string strsql = "insert into r_user_information_t(user_name,user_pictrue,user_password,person_real,ageing,school_name,sex_id,country,major_in,enroll,birth,email,date_time) " +
            "values('" + nickname + "', '" + user_picture + "', '"+pass + "', '" + realname + "', " + ageing + ", '" + school + "', " + sex_id + ", '" + country + "', '" + specialty + "', '" +
            enroll + "', '" + birth + "', '" + email + "',NOW())";
        //string strsql = "insert into r_user_information_t(user_name,user_password,person_real,ageing,school_name,sex_id,country,major_in) " +
        //    "values('" + nickname + "', '" + pass + "', '" + realname + "', " + ageing+ ", '"+school+"', "+sex_id+", '"+country+"', '"+specialty+
        //    "',NOW())";
        string sql2 = "insert into r_person_postsffsum_t(user_name,user_posts_num,user_following_num,user_follower_num,user_name_tiaoshu) values('" + nickname + "'," 
             + 0 + "," + 0 + "," + 0 + "," + 0 + ")";
        int ty1 = mysl.ExecuteNonQuery(strsql);
        int ty2 = mysl.ExecuteNonQuery(sql2);
        if(ty1 == 1)
        {
            return "yes";
        }else
        {
            return "no";
        }
//        string strsql = "insert into r_person_posts_t(user_name,user_post_content,user_post_date)" +
//"values('" + usernamef + "', '" + strtxt + "', NOW())";
        
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
        string strquarydfasrrr = "select user_posts_personnum from r_person_posts_t where  user_name='"+ usernamef+"' order by user_post_date desc ";
        DataTable dtbd = mysl.ExecuteDataTable(strquarydfasrrr);
        if (dtbd.Rows.Count >= 1)
        {
            int niusd = Convert.ToInt32(dtbd.Rows[0][0].ToString());
            niusd++;
            string strsql = "insert into r_person_posts_t(user_name,user_post_content,user_post_date,user_posts_personnum,user_post_personsd)" +
"values('" + usernamef + "', '" + strtxt + "', NOW(),"+niusd+",'" + usernamef + "_"+niusd.ToString()+"')";
            int ty = mysl.ExecuteNonQuery(strsql);
            if (ty == 1)
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
        else
        {
            string strsql = "insert into r_person_posts_t(user_name,user_post_content,user_post_date,user_posts_personnum,user_post_personsd)" +
"values('" + usernamef + "', '" + strtxt + "', NOW(),1,'"+usernamef+"_1')";
            int ty = mysl.ExecuteNonQuery(strsql);
            if (ty==1)
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
           

        
    }
    [WebMethod]
    public DataSet GetDataSetforpersonpostforuser(string username1)
    {
        string strquary = "select t.*,p.user_pictrue from (select user_post_content,user_post_date ,user_name,user_post_personsd,user_post_like_num from r_person_posts_t  order by user_post_date asc) as t,r_user_information_t as p " +
" where t.user_name = p.user_name and p.user_name='"+ username1+"'";
        DataTable dtb = mysl.ExecuteDataTable(strquary);
        var ds = new DataSet();
        var dt = new DataTable();
        dt.Columns.Add("user_post_content");
        dt.Columns.Add("user_post_date");
        dt.Columns.Add("user_name");
        dt.Columns.Add("user_post_personsd");
        dt.Columns.Add("user_post_like_num");
        dt.Columns.Add("user_pictrue");
        int nump = dtb.Rows.Count;
        for (int i = 0; i < nump; i++)
        {
            dt.Rows.Add(dtb.Rows[i][0].ToString(), dtb.Rows[i][1].ToString(), dtb.Rows[i][2].ToString(), dtb.Rows[i][3].ToString(), dtb.Rows[i][4].ToString(), dtb.Rows[i][5].ToString());
        }
        ds.Tables.Add(dt);
      

        return ds;
    }
    [WebMethod]
    public DataSet GetDataSetforpersonpostforuser__for_comment(string username1)
    {
        string strquary = "select user_reply_content,user_replyer,user_follower_pictrue,user_comment_date from r_person_posts_comment_t where user_posts_personnum='" + username1+"'";
        DataTable dtb = mysl.ExecuteDataTable(strquary);
        var ds = new DataSet();
        var dt = new DataTable();
        dt.Columns.Add("user_reply_content");
        dt.Columns.Add("user_replyer");
        dt.Columns.Add("user_follower_pictrue");
        dt.Columns.Add("user_comment_date");
        int nump = dtb.Rows.Count;
        for (int i = 0; i < nump; i++)
        {
            dt.Rows.Add(dtb.Rows[i][0].ToString(), dtb.Rows[i][1].ToString(), dtb.Rows[i][2].ToString(), dtb.Rows[i][3].ToString());
        }
        ds.Tables.Add(dt);
        string vb = "update r_person_posts_t set user_post_comment_tiaoshu='"+nump+"' where user_post_personsd='"+ username1+"'";
        int ty3 = mysl.ExecuteNonQuery(vb);
        return ds;
    }
    [WebMethod]
    public DataSet  GetDataSetforpersonpost(string username1)
    {
        string strquary = "select t.*,p.user_pictrue from (select user_post_content,user_post_date ,user_name,user_post_personsd,user_post_like_num from r_person_posts_t  order by user_post_date asc) as t,r_user_information_t as p " +
" where t.user_name = p.user_name";
        DataTable dtb = mysl.ExecuteDataTable(strquary);
        var ds = new DataSet();
        var dt = new DataTable();
        dt.Columns.Add("user_post_content");
        dt.Columns.Add("user_post_date");
        dt.Columns.Add("user_name");
        dt.Columns.Add("user_post_personsd");
        dt.Columns.Add("user_post_like_num");
        dt.Columns.Add("user_pictrue");
        int nump = dtb.Rows.Count;
        for (int i = 0; i < nump; i++)
        {
            dt.Rows.Add(dtb.Rows[i][0].ToString(), dtb.Rows[i][1].ToString(), dtb.Rows[i][2].ToString(), dtb.Rows[i][3].ToString(), dtb.Rows[i][4].ToString(), dtb.Rows[i][5].ToString());
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

    public DataSet Getfollowingforuser_for_comment(string folloingusername)
   {
       string strquary = "SELECT user_post_coment_sum,user_post_comment_tiaoshu FROM r_person_posts_t where user_post_personsd='"+ folloingusername+"'";
        DataTable dtb = mysl.ExecuteDataTable(strquary);
        var ds = new DataSet();
       var dt = new DataTable();
        dt.Columns.Add("user_post_coment_sum");
        dt.Columns.Add("user_post_comment_tiaoshu");
        
        for (int i = 0; i < dtb.Rows.Count; i++)
        {
            dt.Rows.Add(dtb.Rows[i][0].ToString(), dtb.Rows[i][1].ToString());
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
