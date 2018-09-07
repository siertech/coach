package proscontrasitem;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class ProsContrasItemDAO  extends GenericDAO<ProsContrasItem> {
	
	

	public ProsContrasItemDAO() {
		
		super(ProsContrasItem.class);
		
	}
	
	
	
	
}
