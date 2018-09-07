package fobia;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class FobiaDAO  extends GenericDAO<Fobia> {
	
	

	public FobiaDAO() {
		
		super(Fobia.class);
		
	}
	
	
	
	
}
