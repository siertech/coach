package burndown;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class BurnDownDAO  extends GenericDAO<BurnDown> {
	
	

	public BurnDownDAO() {
		
		super(BurnDown.class);
		
	}
	
	
	
	
}
