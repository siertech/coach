package proscontrasitem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class ProsContrasItemService extends GenericService<ProsContrasItem>   {

    @Autowired
	private ProsContrasItemDAO proscontrasitemDAO;
	
	
}
