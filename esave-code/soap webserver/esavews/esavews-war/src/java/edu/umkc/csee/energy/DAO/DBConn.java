/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.umkc.csee.energy.DAO;

import java.sql.Connection;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

/**
 *
 * @author dpal
 */
public class DBConn {
    private DataSource datasource;
    public  Connection getConnection() throws Exception{
        System.out.println(" connection -----------------");
      Context envCtx = (Context) new InitialContext();
      datasource = (DataSource) envCtx.lookup("jdbc/informixDB");
      return datasource.getConnection();
    }
    
    public  void releaseConnection(Connection conn) throws Exception{
        try{
            if ( conn != null ){
                conn.close();
            }
        }
        catch(Exception e){
            System.out.println("Connection close problem: " + e);
        }
    }

    public static void main(String[] args){
        DBConn c = new DBConn();
        try{
        if ( c.getConnection() != null){
            System.out.println("conn: " + c.toString());
        }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
