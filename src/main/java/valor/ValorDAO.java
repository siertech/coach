package valor;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class ValorDAO  extends GenericDAO<Valor> {
	
	

	public ValorDAO() {
		
		super(Valor.class);
		
	}
	
	
	
	
}
