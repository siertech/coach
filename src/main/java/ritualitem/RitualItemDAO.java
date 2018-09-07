package ritualitem;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class RitualItemDAO  extends GenericDAO<RitualItem> {
	
	

	public RitualItemDAO() {
		
		super(RitualItem.class);
		
	}
	
	
	
	
}
