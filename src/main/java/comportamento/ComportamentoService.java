package comportamento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class ComportamentoService extends GenericService<Comportamento>   {

    @Autowired
	private ComportamentoDAO comportamentoDAO;
	
	
}
