package frequenciasonora;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class FrequenciaSonoraService extends GenericService<FrequenciaSonora>   {

    @Autowired
	private FrequenciaSonoraDAO frequenciasonoraDAO;
	
	
}
