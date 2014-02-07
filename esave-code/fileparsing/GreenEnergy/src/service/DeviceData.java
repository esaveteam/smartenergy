
package service;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for deviceData complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="deviceData">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="accelerometer" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="createdby" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="creation_date" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="dataid" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="datatype" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="device_dataid" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="device_hexa_code" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="deviceid" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="devtype" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="energy_consumption" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="energy_type" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="isenabled" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="location" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="model" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="name" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="storage" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="temperature" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="time_duration" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "deviceData", propOrder = {
    "accelerometer",
    "createdby",
    "creationDate",
    "dataid",
    "datatype",
    "deviceDataid",
    "deviceHexaCode",
    "deviceid",
    "devtype",
    "energyConsumption",
    "energyType",
    "isenabled",
    "location",
    "model",
    "name",
    "storage",
    "temperature",
    "timeDuration"
})
public class DeviceData {

    protected String accelerometer;
    protected String createdby;
    @XmlElement(name = "creation_date")
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar creationDate;
    protected int dataid;
    protected String datatype;
    @XmlElement(name = "device_dataid")
    protected int deviceDataid;
    @XmlElement(name = "device_hexa_code")
    protected String deviceHexaCode;
    protected int deviceid;
    protected String devtype;
    @XmlElement(name = "energy_consumption")
    protected String energyConsumption;
    @XmlElement(name = "energy_type")
    protected String energyType;
    protected String isenabled;
    protected String location;
    protected String model;
    protected String name;
    protected String storage;
    protected String temperature;
    @XmlElement(name = "time_duration")
    protected long timeDuration;

    /**
     * Gets the value of the accelerometer property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAccelerometer() {
        return accelerometer;
    }

    /**
     * Sets the value of the accelerometer property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAccelerometer(String value) {
        this.accelerometer = value;
    }

    /**
     * Gets the value of the createdby property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCreatedby() {
        return createdby;
    }

    /**
     * Sets the value of the createdby property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCreatedby(String value) {
        this.createdby = value;
    }

    /**
     * Gets the value of the creationDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getCreationDate() {
        return creationDate;
    }

    /**
     * Sets the value of the creationDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setCreationDate(XMLGregorianCalendar value) {
        this.creationDate = value;
    }

    /**
     * Gets the value of the dataid property.
     * 
     */
    public int getDataid() {
        return dataid;
    }

    /**
     * Sets the value of the dataid property.
     * 
     */
    public void setDataid(int value) {
        this.dataid = value;
    }

    /**
     * Gets the value of the datatype property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDatatype() {
        return datatype;
    }

    /**
     * Sets the value of the datatype property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDatatype(String value) {
        this.datatype = value;
    }

    /**
     * Gets the value of the deviceDataid property.
     * 
     */
    public int getDeviceDataid() {
        return deviceDataid;
    }

    /**
     * Sets the value of the deviceDataid property.
     * 
     */
    public void setDeviceDataid(int value) {
        this.deviceDataid = value;
    }

    /**
     * Gets the value of the deviceHexaCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDeviceHexaCode() {
        return deviceHexaCode;
    }

    /**
     * Sets the value of the deviceHexaCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDeviceHexaCode(String value) {
        this.deviceHexaCode = value;
    }

    /**
     * Gets the value of the deviceid property.
     * 
     */
    public int getDeviceid() {
        return deviceid;
    }

    /**
     * Sets the value of the deviceid property.
     * 
     */
    public void setDeviceid(int value) {
        this.deviceid = value;
    }

    /**
     * Gets the value of the devtype property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDevtype() {
        return devtype;
    }

    /**
     * Sets the value of the devtype property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDevtype(String value) {
        this.devtype = value;
    }

    /**
     * Gets the value of the energyConsumption property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEnergyConsumption() {
        return energyConsumption;
    }

    /**
     * Sets the value of the energyConsumption property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEnergyConsumption(String value) {
        this.energyConsumption = value;
    }

    /**
     * Gets the value of the energyType property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEnergyType() {
        return energyType;
    }

    /**
     * Sets the value of the energyType property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEnergyType(String value) {
        this.energyType = value;
    }

    /**
     * Gets the value of the isenabled property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIsenabled() {
        return isenabled;
    }

    /**
     * Sets the value of the isenabled property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIsenabled(String value) {
        this.isenabled = value;
    }

    /**
     * Gets the value of the location property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLocation() {
        return location;
    }

    /**
     * Sets the value of the location property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLocation(String value) {
        this.location = value;
    }

    /**
     * Gets the value of the model property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getModel() {
        return model;
    }

    /**
     * Sets the value of the model property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setModel(String value) {
        this.model = value;
    }

    /**
     * Gets the value of the name property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the value of the name property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setName(String value) {
        this.name = value;
    }

    /**
     * Gets the value of the storage property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getStorage() {
        return storage;
    }

    /**
     * Sets the value of the storage property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setStorage(String value) {
        this.storage = value;
    }

    /**
     * Gets the value of the temperature property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTemperature() {
        return temperature;
    }

    /**
     * Sets the value of the temperature property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTemperature(String value) {
        this.temperature = value;
    }

    /**
     * Gets the value of the timeDuration property.
     * 
     */
    public long getTimeDuration() {
        return timeDuration;
    }

    /**
     * Sets the value of the timeDuration property.
     * 
     */
    public void setTimeDuration(long value) {
        this.timeDuration = value;
    }

}
