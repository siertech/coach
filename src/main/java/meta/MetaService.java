package meta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class MetaService extends GenericService<Meta>   {

    @Autowired
	private MetaDAO metaDAO;
	
	
}
