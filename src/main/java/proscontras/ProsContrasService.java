package proscontras;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class ProsContrasService extends GenericService<ProsContras>   {

    @Autowired
	private ProsContrasDAO proscontrasDAO;
	
	
}
