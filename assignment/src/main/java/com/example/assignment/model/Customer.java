package com.example.assignment.model;
import java.sql.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {

    private long id;
    private String name;
    private Date dob;
    private String nic;
    private Number mobile;
    private String address;


    public Customer() {

    }

    public Customer(String name, Date dob, String nic, Number mobile, String address) {
        this.name = name;
        this.dob = dob;
        this.nic = nic;
        this.mobile = mobile;
        this.address = address;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "dob", nullable = false)
    public Date getDOB() {
        return dob;
    }
    public void setDOB(Date dob) {
        this.dob = dob;
    }

    @Column(name = "nic", nullable = false, unique = true)
    public String getNIC() {
        return nic;
    }
    public void setNIC(String nic) {
        this.nic = nic;
    }

    @Column(name = "mobile")
    public Number getMobile() {
        return mobile;
    }
    public void setMobile(Number mobile) {
        this.mobile = mobile;
    }

    @Column(name = "address")
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
}