package diariosonho;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class DiarioSonhoDAO  extends GenericDAO<DiarioSonho> {
	
	

	public DiarioSonhoDAO() {
		
		super(DiarioSonho.class);
		
	}
	
	
	
	
}
