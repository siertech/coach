package habito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class HabitoService extends GenericService<Habito>   {

    @Autowired
	private HabitoDAO habitoDAO;
	
	
}
