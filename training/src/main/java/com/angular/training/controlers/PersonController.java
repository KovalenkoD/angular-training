package com.angular.training.controlers;

import com.angular.training.model.Person;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.stream.IntStream;

@RestController()
@RequestMapping("/persons")
@CrossOrigin
public class PersonController {

    private static List<Person> persons = new ArrayList<>();
    static {
        IntStream.range(0, 10).forEach(item -> persons.add(new Person(new BigInteger(String.valueOf(item)), "sad" + item, "sad", new Date(), Collections.EMPTY_LIST)));
    }

    @GetMapping()
    public List<Person> getAllList(){
        return persons;
    }

    @GetMapping("/{id}")
    public Person getById(@PathVariable BigInteger id){
        return persons.stream().filter(person -> id.equals(person.getId())).findFirst().get();
    }

    @PutMapping()
    public Person save(@RequestBody Person person){
        Person inDB = persons.stream().filter(person2 -> person.getId().equals(person2.getId())).findFirst().get();
        inDB.setFirstName(person.getFirstName());
        inDB.setLastName(person.getLastName());
        inDB.setEmails(person.getEmails());

        return inDB;
    }


}
