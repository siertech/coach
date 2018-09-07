package lembrancamarcante;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class LembrancaMarcanteDAO  extends GenericDAO<LembrancaMarcante> {
	
	

	public LembrancaMarcanteDAO() {
		
		super(LembrancaMarcante.class);
		
	}
	
	
	
	
}
