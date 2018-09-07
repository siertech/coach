package avaliacaopapel;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class AvaliacaoPapelDAO  extends GenericDAO<AvaliacaoPapel> {
	
	

	public AvaliacaoPapelDAO() {
		
		super(AvaliacaoPapel.class);
		
	}
	
	
	
	
}
