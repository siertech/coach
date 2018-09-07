package lembrancamarcante;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class LembrancaMarcanteService extends GenericService<LembrancaMarcante>   {

    @Autowired
	private LembrancaMarcanteDAO lembrancamarcanteDAO;
	
	
}
