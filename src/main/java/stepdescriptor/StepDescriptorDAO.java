package stepdescriptor;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class StepDescriptorDAO  extends GenericDAO<StepDescriptor> {
	
	

	public StepDescriptorDAO() {
		
		super(StepDescriptor.class);
		
	}
	
	
	
	
}
