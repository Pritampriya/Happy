package studentcrudimaginnovative.controller;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import studentcrudimaginnovative.model.Student;
import studentcrudimaginnovative.repo.StudentRepo;

import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private MongoTemplate mongoTemplate;

    // Save the data in the database
    @PostMapping("/student")
    public Student saveStudent(@RequestBody Student student) {
        return this.studentRepo.save(student);
    }

    @GetMapping("/student")
    public List<Student> displayAll() {
        return this.studentRepo.findAll();
    }

    @PutMapping("student/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable String id, @RequestBody Student updatedStudent) {
        Query query = new Query(Criteria.where("_id").is(new ObjectId(id)));
        Student existingStudent = null;

        try {
            existingStudent = mongoTemplate.findOne(query, Student.class);
        } catch (Exception e) {
            e.printStackTrace();
            // Handle the exception appropriately, maybe return an error response
        }

        existingStudent.setFirstName(updatedStudent.getFirstName());
        existingStudent.setLastName(updatedStudent.getLastName());
        existingStudent.setDob(updatedStudent.getDob());
        existingStudent.setSubject1(updatedStudent.getSubject1());
        existingStudent.setSubject2(updatedStudent.getSubject2());
        existingStudent.setSubject3(updatedStudent.getSubject3());
        existingStudent.setSection(updatedStudent.getSection());
        existingStudent.setGender(updatedStudent.getGender());

        Student updated = studentRepo.save(existingStudent);
        return ResponseEntity.ok(updated);
    }
}
