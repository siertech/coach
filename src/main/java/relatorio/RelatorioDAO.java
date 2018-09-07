package relatorio;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class RelatorioDAO  extends GenericDAO<Relatorio> {
	
	

	public RelatorioDAO() {
		
		super(Relatorio.class);
		
	}
	
	
	
	
}
