package listitem;
import com.siertech.stapi.model.GenericDAO;
import org.springframework.stereotype.Repository;

@Repository
public class ListItemDAO  extends GenericDAO<ListItem> {
	
	

	public ListItemDAO() {
		
		super(ListItem.class);
		
	}
	
	
	
	
}
