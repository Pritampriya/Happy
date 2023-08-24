package studentcrudimaginnovative.model;



import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;


@Data
@Document(collection = "student-innovation")
public class Student {
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String regdId;
	

	private String firstName;
	
	private String lastName;
	
	private String dob;
	
	private String subject1;
	private String subject2;
	private String subject3;
	
	private String section;
	
	private String gender;
	
	
	
	
	
	

}
