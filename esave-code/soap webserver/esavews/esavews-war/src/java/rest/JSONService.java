package rest;

import edu.umkc.csee.energy.DAO.EnergyTransactionDAO;
import edu.umkc.csee.energy.model.Device;
import edu.umkc.csee.energy.model.DeviceData;
import java.util.List;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;


@Path("/json")
public class JSONService {

	@GET
	@Path("/getdevices")
	@Produces(MediaType.APPLICATION_JSON)
         public Device[] getDevices() {
                    EnergyTransactionDAO dao = new   EnergyTransactionDAO();
                    List<Device> dList = dao.getDeviceData();
                    Device[] d = new Device[dList.size()];
                    int i = 0;
                    for ( Device d1: dList){
                        d[i] = d1;
                        i++;
                    }
                    for ( Device d2: d){
                    System.out.println(d2.getDevtype());
                            }

                    return d;
    }  
        
        @GET
	@Path("/getalldata")
	@Produces(MediaType.APPLICATION_JSON)

            public DeviceData[] getAllData() {
        EnergyTransactionDAO dao = new   EnergyTransactionDAO();
        List<DeviceData> devData = dao.getData();
        DeviceData[] dd = new DeviceData[devData.size()];
        int i = 0;
        for ( DeviceData x: devData){
            dd[i] = x;
            i++;
        }

        return dd;
    }  

        @GET
	@Path("/getdatabydatesandlocations")
	@Produces(MediaType.APPLICATION_JSON)

    public DeviceData[] getDatabyDates(@QueryParam("from") String from,@QueryParam("to") String to,@QueryParam("location") String location ) {
        List<DeviceData> dd1;
        EnergyTransactionDAO dao = new   EnergyTransactionDAO();
        dd1 = dao.getData(from, to, location);
        DeviceData[] dd = new DeviceData[dd1.size()];
        int i = 0;
        for ( DeviceData x: dd1){
            dd[i] = x;
            i++;
        }

    return dd;
    }  

	
}