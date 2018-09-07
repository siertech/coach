package missao;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class MissaoDAO  extends GenericDAO<Missao> {
	
	

	public MissaoDAO() {
		
		super(Missao.class);
		
	}
	
	
	
	
}
