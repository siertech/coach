package anotacao;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class AnotacaoDAO  extends GenericDAO<Anotacao> {
	
	

	public AnotacaoDAO() {
		
		super(Anotacao.class);
		
	}
	
	
	
	
}
