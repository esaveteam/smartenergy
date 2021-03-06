
package service;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.logging.Logger;
import javax.xml.namespace.QName;
import javax.xml.ws.Service;
import javax.xml.ws.WebEndpoint;
import javax.xml.ws.WebServiceClient;
import javax.xml.ws.WebServiceFeature;




/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.1.6 in JDK 6
 * Generated source version: 2.1
 * 
 */
@WebServiceClient(name = "EnergyWSService", targetNamespace = "http://service/", wsdlLocation = "http://170.224.192.51:8080/esavews-war/EnergyWSService?wsdl")
public class EnergyWSService_Service
    extends Service
{

    private final static URL ENERGYWSSERVICE_WSDL_LOCATION;
    private final static Logger logger = Logger.getLogger(service.EnergyWSService_Service.class.getName());

    static {
        URL url = null;
        try {
            URL baseUrl;
            baseUrl = service.EnergyWSService_Service.class.getResource(".");
            url = new URL(baseUrl, "http://170.224.192.51:8080/esavews-war/EnergyWSService?wsdl");
        } catch (MalformedURLException e) {
            logger.warning("Failed to create URL for the wsdl Location: 'http://170.224.192.51:8081/EnergyWSService/EnergyWSService?wsdl', retrying as a local file");
            logger.warning(e.getMessage());
        }
        ENERGYWSSERVICE_WSDL_LOCATION = url;
    }

    public EnergyWSService_Service(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public EnergyWSService_Service() {
        super(ENERGYWSSERVICE_WSDL_LOCATION, new QName("http://service/", "EnergyWSService"));
    }

    /**
     * 
     * @return
     *     returns EnergyWSService
     */
    @WebEndpoint(name = "EnergyWSServicePort")
    public EnergyWSService getEnergyWSServicePort() {
        return super.getPort(new QName("http://service/", "EnergyWSServicePort"), EnergyWSService.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns EnergyWSService
     */
    @WebEndpoint(name = "EnergyWSServicePort")
    public EnergyWSService getEnergyWSServicePort(WebServiceFeature... features) {
        return super.getPort(new QName("http://service/", "EnergyWSServicePort"), EnergyWSService.class, features);
    }

}
