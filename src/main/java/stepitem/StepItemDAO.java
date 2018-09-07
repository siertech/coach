package stepitem;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class StepItemDAO  extends GenericDAO<StepItem> {
	
	

	public StepItemDAO() {
		
		super(StepItem.class);
		
	}
	
	
	
}
