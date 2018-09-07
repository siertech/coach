package evidencia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.siertech.stapi.model.GenericService;

@Service
public class EvidenciaService extends GenericService<Evidencia>   {

    @Autowired
	private EvidenciaDAO evidenciaDAO;
	
	
}
