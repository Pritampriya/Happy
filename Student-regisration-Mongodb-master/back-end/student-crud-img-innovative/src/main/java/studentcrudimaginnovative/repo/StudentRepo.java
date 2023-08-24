package studentcrudimaginnovative.repo;


import org.springframework.data.mongodb.repository.MongoRepository;

import studentcrudimaginnovative.model.Student;



public interface StudentRepo extends MongoRepository<Student, Integer>{
	


}
