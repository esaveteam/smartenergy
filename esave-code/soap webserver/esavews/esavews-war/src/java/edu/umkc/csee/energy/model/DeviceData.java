/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.umkc.csee.energy.model;

import java.sql.Timestamp;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

/**
 *
 * @author dpal
 */
public class DeviceData {
    private int deviceid;
    private int dataid;
    private String name;
    private String devtype;
    private String location;
    private String isenabled;
    private String createdby;
    private Timestamp creation_date;
    private int device_dataid;
    private String energy_type;
    private String storage;
    private String datatype;
    private long time_duration;
    private String model;
    private String device_hexa_code;
    private String accelerometer;
    private String temperature;
    private String energy_consumption;
    

    /**
     * @return the deviceid
     */
    public int getDeviceid() {
        return deviceid;
    }

    /**
     * @param deviceid the deviceid to set
     */
    public void setDeviceid(int deviceid) {
        this.deviceid = deviceid;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the devtype
     */
    public String getDevtype() {
        return devtype;
    }

    /**
     * @param devtype the devtype to set
     */
    public void setDevtype(String devtype) {
        this.devtype = devtype;
    }

    /**
     * @return the location
     */
    public String getLocation() {
        return location;
    }

    /**
     * @param location the location to set
     */
    public void setLocation(String location) {
        this.location = location;
    }

    /**
     * @return the isenabled
     */
    public String getIsenabled() {
        return isenabled;
    }

    /**
     * @param isenabled the isenabled to set
     */
    public void setIsenabled(String isenabled) {
        this.isenabled = isenabled;
    }

    /**
     * @return the createdby
     */
    public String getCreatedby() {
        return createdby;
    }

    /**
     * @param createdby the createdby to set
     */
    public void setCreatedby(String createdby) {
        this.createdby = createdby;
    }

    /**
     * @return the creation_date
     */
    @XmlJavaTypeAdapter( TimestampAdapter.class)
    public Timestamp getCreation_date() {
        return creation_date;
    }

    /**
     * @param creation_date the creation_date to set
     */

    public void setCreation_date(Timestamp creation_date) {
        this.creation_date = creation_date;
    }

    /**
     * @return the device_dataid
     */
    public int getDevice_dataid() {
        return device_dataid;
    }

    /**
     * @param device_dataid the device_dataid to set
     */
    public void setDevice_dataid(int device_dataid) {
        this.device_dataid = device_dataid;
    }

    /**
     * @return the energy_type
     */
    public String getEnergy_type() {
        return energy_type;
    }

    /**
     * @param energy_type the energy_type to set
     */
    public void setEnergy_type(String energy_type) {
        this.energy_type = energy_type;
    }

    /**
     * @return the storage
     */
    public String getStorage() {
        return storage;
    }

    /**
     * @param storage the storage to set
     */
    public void setStorage(String storage) {
        this.storage = storage;
    }

    /**
     * @return the datatype
     */
    public String getDatatype() {
        return datatype;
    }

    /**
     * @param datatype the datatype to set
     */
    public void setDatatype(String datatype) {
        this.datatype = datatype;
    }

    /**
     * @return the time_duration
     */
    public long getTime_duration() {
        return time_duration;
    }

    /**
     * @param time_duration the time_duration to set
     */
    public void setTime_duration(long time_duration) {
        this.time_duration = time_duration;
    }

    /**
     * @return the dataid
     */
    public int getDataid() {
        return dataid;
    }

    /**
     * @param dataid the dataid to set
     */
    public void setDataid(int dataid) {
        this.dataid = dataid;
    }

    /**
     * @return the model
     */
    public String getModel() {
        return model;
    }

    /**
     * @param model the model to set
     */
    public void setModel(String model) {
        this.model = model;
    }

    /**
     * @return the device_hexa_code
     */
    public String getDevice_hexa_code() {
        return device_hexa_code;
    }

    /**
     * @param device_hexa_code the device_hexa_code to set
     */
    public void setDevice_hexa_code(String device_hexa_code) {
        this.device_hexa_code = device_hexa_code;
    }

    /**
     * @return the accelerometer
     */
    public String getAccelerometer() {
        return accelerometer;
    }

    /**
     * @param accelerometer the accelerometer to set
     */
    public void setAccelerometer(String accelerometer) {
        this.accelerometer = accelerometer;
    }

    /**
     * @return the temperature
     */
    public String getTemperature() {
        return temperature;
    }

    /**
     * @param temperature the temperature to set
     */
    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }

    /**
     * @return the energy_consumption
     */
    public String getEnergy_consumption() {
        return energy_consumption;
    }

    /**
     * @param energy_consumption the energy_consumption to set
     */
    public void setEnergy_consumption(String energy_consumption) {
        this.energy_consumption = energy_consumption;
    }
    
    
    
}
