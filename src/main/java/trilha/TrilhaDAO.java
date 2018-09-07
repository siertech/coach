package trilha;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class TrilhaDAO  extends GenericDAO<Trilha> {
	
	

	public TrilhaDAO() {
		
		super(Trilha.class);
		
	}
	
	
	
	
}
