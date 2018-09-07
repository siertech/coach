package ritual;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class RitualDAO  extends GenericDAO<Ritual> {
	
	

	public RitualDAO() {
		
		super(Ritual.class);
		
	}
	
	
	
	
}
