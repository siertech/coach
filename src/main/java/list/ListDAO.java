package list;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class ListDAO  extends GenericDAO<List> {
	
	

	public ListDAO() {
		
		super(List.class);
		
	}
	
	
	
	
}
