package com.angular.training.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Person extends BaseEntity {
    private String firstName;
    private String lastName;
    private Date dateOfBirth;
    private List<Email> emails;

    public Person(BigInteger id, String firstName, String lastName, Date dateOfBirth, List<Email> emails) {
        super(id);
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.emails = emails;
    }
}
