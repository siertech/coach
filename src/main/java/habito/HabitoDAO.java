package habito;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class HabitoDAO  extends GenericDAO<Habito> {
	
	public HabitoDAO() {
		
		super(Habito.class);
		
	}
	

	
}
