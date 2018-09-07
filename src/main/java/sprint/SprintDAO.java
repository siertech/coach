package sprint;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class SprintDAO  extends GenericDAO<Sprint> {
	
	

	public SprintDAO() {
		
		super(Sprint.class);
		
	}
	
	
	
	
}
