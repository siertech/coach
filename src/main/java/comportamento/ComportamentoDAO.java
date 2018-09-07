package comportamento;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class ComportamentoDAO  extends GenericDAO<Comportamento> {
	
	

	public ComportamentoDAO() {
		
		super(Comportamento.class);
		
	}
	
	
	
	
}
