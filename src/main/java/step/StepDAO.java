package step;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class StepDAO  extends GenericDAO<Step> {
	
	

	public StepDAO() {
		
		super(Step.class);
		
	}
	
	
	
	
}
