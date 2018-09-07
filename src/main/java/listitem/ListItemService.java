package listitem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class ListItemService extends GenericService<ListItem>   {

    @Autowired
	private ListItemDAO listitemDAO;
	
	
}
