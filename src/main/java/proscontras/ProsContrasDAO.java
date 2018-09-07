package proscontras;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class ProsContrasDAO  extends GenericDAO<ProsContras> {
	
	

	public ProsContrasDAO() {
		
		super(ProsContras.class);
		
	}
	
	
	
	
}
