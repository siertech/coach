package papel;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class PapelDAO  extends GenericDAO<Papel> {
	
	

	public PapelDAO() {
		
		super(Papel.class);
		
	}
	
	
	
	
}
