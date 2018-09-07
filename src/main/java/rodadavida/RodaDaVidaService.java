package rodadavida;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class RodaDaVidaService extends GenericService<RodaDaVida>   {

    @Autowired
	private RodaDaVidaDAO rodadavidaDAO;
	
	
}
