package rodadavida;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class RodaDaVidaDAO  extends GenericDAO<RodaDaVida> {
	
	

	public RodaDaVidaDAO() {
		
		super(RodaDaVida.class);
		
	}
	
	
	
	
}
