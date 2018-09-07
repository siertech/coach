package trilha;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import meta.Meta;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "trilha")
@Getter @Setter
public  class Trilha extends CrudClass {


	@ManyToOne
	@JoinColumn(name="meta_trilha_id")
	@JsonView(Views.Public.class)
	 private  Meta meta;


}
